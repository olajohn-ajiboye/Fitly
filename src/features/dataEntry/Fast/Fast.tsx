import React, { useEffect, useState } from 'react'
import { useMutation } from '@apollo/client'
import { useSelector } from 'react-redux'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'
import format from 'date-fns/format'

import { Paper, Button } from '@material-ui/core'
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone'

import { useStyles } from './styles'
import { upsertFast, upsertFastVariables } from '../../../graphql/mutations/types/upsertFast'
import { UPSERT_FAST } from '../../../graphql/mutations'
import { currentUser } from '../../auth/index'
import { Feeling, FastFeelingsEnum } from './Feeling'

const formatTime = (date: number) => format(date, 'YYYY-MM-DD HH:mm')

export default function Fast() {
	const [startTime, setStart] = useState<string | null>(null)
	const [endTime, setEnd] = useState<string | null>(null)
	const [feeling, setFeeling] = useState<FastFeelingsEnum | null>(null)
	const [timer, setTimer] = useState<string | null>(null)

	const { end, root, start, updates } = useStyles()
	const { id } = useSelector(currentUser)!
	const entry_date = new Date().toISOString().split('T')[0]

	const [updateFast] = useMutation<upsertFast, upsertFastVariables>(UPSERT_FAST, {
		variables: {
			id: `${entry_date}-${id}`,
			start_time: startTime,
			user_id: id,
			entry_date,
			end_time: endTime,
			feeling,
		},
	})

	const onClickStart = async () => {
		const start = formatTime(new Date().getTime())
		await setStart(start)
		try {
			updateFast()
		} catch (error) {
			console.log(error)
		}
	}

	const onClickEnd = async () => {
		const end = formatTime(new Date().getTime())
		await setEnd(end)
		try {
			updateFast()
		} catch (error) {
			console.log(error)
		} finally {
			setStart(null)
		}
	}

	const onSelectFeeling = async (feeling: FastFeelingsEnum) => {
		await setFeeling(feeling)
		try {
			if (startTime === null) return
			updateFast()
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		console.log(startTime)
		const timer = setInterval(() => {
			if (startTime) {
				setTimer(distanceInWordsToNow(startTime))
			}
		}, 1000)
		return () => clearInterval(timer)
	}, [startTime])
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
						{startTime && 'Started : '} <span>{startTime}</span>
					</h5>
					<Feeling onSelectFeeling={onSelectFeeling} />
					<h6>{timer}</h6>
				</Paper>
			</div>
		</>
	)
}
