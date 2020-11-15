import React, { useEffect, useState, useReducer } from 'react'
import { useMutation } from '@apollo/client'
import { useSelector } from 'react-redux'
import distanceInWordsToNow from 'date-fns/formatDistanceToNow'
import format from 'date-fns/format'

import { Paper, Button } from '@material-ui/core'
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone'

import DateTimePicker from '../../../components/DateTimePicker'

import { currentUser } from '../../auth'
import { fastReducer, initialFastState, FastState } from './reducer'
import { Feeling, FastFeelingsEnum } from './Feeling'
import { useStyles } from './styles'
import { upsertFast, upsertFastVariables } from '../../../graphql/mutations/types/upsertFast'
import { UPSERT_FAST } from '../../../graphql/mutations'
import { useLocalStorage } from '../../../hooks/useLocalStorage'

const entry_date = format(new Date().getTime(), 'YYYY-MM-DD')

export default function Fast() {
	const { edit, end, root, start, updates } = useStyles()

	const [timer, setTimer] = useState<string | null>(null)
	const [show, setShow] = useState(false)
	const [selectedDate, handleDateChange] = useState<Date | null>(new Date('2019-01-01T18:54'))

	const { id } = useSelector(currentUser)!
	const { getLocalStorageItem } = useLocalStorage<FastState>()
	const start_time = getLocalStorageItem('fast')?.start_time
	const started = getLocalStorageItem('fast')?.started

	const [fastState, dispatch] = useReducer(fastReducer, initialFastState)

	const [updateFast] = useMutation<upsertFast, upsertFastVariables>(UPSERT_FAST, {
		variables: {
			id: `${entry_date}-${id}`,
			user_id: id,
			entry_date,
			start_time: fastState.start_time,
			end_time: fastState.end_time,
			feeling: fastState.feeling,
		},
	})

	const onCloseDatePicker = () => {
		setShow(false)
	}

	const onClickStart = () => {
		const start = new Date().getTime()
		dispatch({ type: 'startFast', start })
	}

	const onSelectFeeling = async (feeling: FastFeelingsEnum) => {
		await dispatch({ type: 'addFeeling', feeling })
		try {
			if (started) updateFast()
		} catch (error) {
			console.log(error)
		}
	}

	console.log(selectedDate)
	const onClickEnd = async () => {
		const end = new Date().getTime()
		await dispatch({ type: 'endFast', end })
		try {
			await updateFast()
		} catch (error) {
			console.log(error)
		} finally {
			dispatch({ type: 'reset' })
		}
	}

	useEffect(() => {
		const timer = setInterval(() => {
			if (start_time) {
				setTimer(distanceInWordsToNow(start_time))
			}
		}, 6000)
		return () => clearInterval(timer)
	}, [start_time, fastState])

	return (
		<>
			<Paper className={root} elevation={6}>
				<DateTimePicker
					label="Edit Start"
					show={show}
					onClose={onCloseDatePicker}
					selectedDate={selectedDate}
					handleDateChange={handleDateChange}
				/>
				<div className={start}>
					<Button variant="contained" color="primary" size="small" onClick={onClickStart} disabled={started}>
						Start
					</Button>
					<EditTwoToneIcon className={edit} onClick={() => setShow(true)} />
				</div>

				<div className={end}>
					<Button variant="contained" size="small" color="secondary" onClick={onClickEnd} disabled={!started}>
						End
					</Button>
					<EditTwoToneIcon className={edit} onClick={() => setShow(true)} />
				</div>
			</Paper>
			<div>
				<Paper className={updates} elevation={6}>
					<h5>
						{' '}
						{started && 'Started : '} <span> &nbsp; {started && start_time}</span>
					</h5>
					<Feeling onSelectFeeling={onSelectFeeling} />
					<h6>{started && timer}</h6>
				</Paper>
			</div>
		</>
	)
}
