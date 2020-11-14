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
	const [timer, setTimer] = useState<string | null>(null)
	const { id } = useSelector(currentUser)!
	const { getLocalStorageItem, setLocalStorageItem } = useLocalStorage<upsertFastVariables>()
	const { start_time, end_time, feeling } = getLocalStorageItem('fast')
	const [fastState, dispatch] = useReducer(fastReducer, initialFastState)

	const { end, root, start, updates } = useStyles()

	const [updateFast] = useMutation<upsertFast, upsertFastVariables>(UPSERT_FAST, {
		variables: {
			id: `${entry_date}-${id}`,
			start_time,
			user_id: id,
			entry_date,
			end_time,
			feeling,
		},
	})

	const onClickStart = async () => {
		const start = formatTime(new Date().getTime())
		setLocalStorageItem('fast', {
			start_time: start,
			end_time,
			feeling,
		})
		dispatch({ type: 'startFast', start })
	}

	const onSelectFeeling = async (feeling: FastFeelingsEnum) => {
		setLocalStorageItem('fast', {
			start_time,
			end_time,
			feeling,
		})
		dispatch({ type: 'addFeeling', feeling })
	}

	const onClickEnd = async () => {
		const end = formatTime(new Date().getTime())
		setLocalStorageItem('fast', {
			start_time: null,
			end_time: end,
			feeling,
		})
		dispatch({ type: 'endFast', end })
		try {
			updateFast()
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		const timer = setInterval(() => {
			if (start_time) {
				setTimer(distanceInWordsToNow(start_time))
			}
		}, 1000)
		return () => clearInterval(timer)
	}, [start_time, fastState])

	return (
		<>
			<Paper className={root}>
				<div className={start}>
					<Button variant="contained" color="primary" size="small" onClick={onClickStart}>
						Start
					</Button>
					<EditTwoToneIcon> Edit start </EditTwoToneIcon>
				</div>

				<div className={end}>
					<Button variant="contained" size="small" color="secondary" onClick={onClickEnd}>
						End
					</Button>
					<EditTwoToneIcon />
				</div>
			</Paper>
			<div>
				<Paper className={updates}>
					<h5>
						{' '}
						{start_time && 'Started : '} <span>{start_time}</span>
					</h5>
					<Feeling onSelectFeeling={onSelectFeeling} />
					<h6>{timer}</h6>
				</Paper>
			</div>
		</>
	)
}
