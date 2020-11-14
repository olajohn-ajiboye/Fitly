import React, { useEffect, useState, useReducer } from 'react'
import { useMutation } from '@apollo/client'
import { useSelector } from 'react-redux'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'
import format from 'date-fns/format'

import { Paper, Button } from '@material-ui/core'
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone'

import { currentUser } from '../../auth'
import { fastReducer, initialFastState } from './reducer'
import { Feeling, FastFeelingsEnum } from './Feeling'
import { useStyles } from './styles'
import { upsertFast, upsertFastVariables } from '../../../graphql/mutations/types/upsertFast'
import { UPSERT_FAST } from '../../../graphql/mutations'
import { useLocalStorage } from '../../../hooks/useLocalStorage'

const formatTime = (date: number) => format(date, 'YYYY-MM-DD HH:mm')
const entry_date = format(new Date().getTime(), 'YYYY-MM-DD')

export default function Fast() {
	const { end, root, start, updates } = useStyles()

	const [timer, setTimer] = useState<string | null>(null)
	const { id } = useSelector(currentUser)!
	const { getLocalStorageItem } = useLocalStorage<any>()
	const start_time = getLocalStorageItem('fast')?.start_time
	const { started } = getLocalStorageItem('fast')

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

	const onClickStart = () => {
		const start = formatTime(new Date().getTime())
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

	const onClickEnd = async () => {
		const end = formatTime(new Date().getTime())
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
				<div className={start}>
					<Button variant="contained" color="primary" size="small" onClick={onClickStart} disabled={started}>
						Start
					</Button>
					<EditTwoToneIcon> Edit start </EditTwoToneIcon>
				</div>

				<div className={end}>
					<Button variant="contained" size="small" color="secondary" onClick={onClickEnd} disabled={!started}>
						End
					</Button>
					<EditTwoToneIcon />
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
