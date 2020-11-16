import React, { useEffect, useState } from 'react'
import { useMutation, useLazyQuery } from '@apollo/client'
import { useSelector } from 'react-redux'
import distanceInWordsToNow from 'date-fns/formatDistanceToNow'
import format from 'date-fns/format'
import formatDistance from 'date-fns/formatDistance'

import { Paper, Button } from '@material-ui/core'
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone'

import DateTimePicker from '../../../components/DateTimePicker'

import { currentUser } from '../../auth'
import { Feeling, FastFeelingsEnum } from './Feeling'
import { useStyles } from './styles'

import { UPSERT_FAST, UPDATE_FAST } from '../../../graphql/mutations'
import { GET_FAST } from '../../../graphql/queries'
import { getFasting, getFastingVariables } from '../../../graphql/queries/types/getFasting'
import { upsertFast as upsertFastQuery, upsertFastVariables } from '../../../graphql/mutations/types/upsertFast'
import { updateFast as updateFastQuery, updateFastVariables } from '../../../graphql/mutations/types/updateFast'

const entry_date = format(new Date().getTime(), 'yyyy-MM-dd')
const formatDateEntry = (date: any) => (date ? new Date(date.split('T')[0].split('-').toString()) : null)
const formatStartTime = (date: any) => format(new Date().getTime(), 'yyyy-MM-dd hh:mm')
const formatCalendarDate = (date: any) => {
	if (!date) return null
	const { year, month, day, hour, minute } = date
	return `${year}-${month}-${day}T${hour}:${minute}`
}

type Edit = 'start' | 'end'

export default function Fast() {
	const { edit, end, root, start, updates } = useStyles()

	const [timer, setTimer] = useState<string | null>(null)
	const [show, setShow] = useState(false)
	const [selectedDate, handleDateChange] = useState<Date | null>(null)
	const [timeEdit, setEdit] = useState<Edit | null>(null)

	const id = useSelector(currentUser)?.id ?? ''

	const [upsertFast] = useMutation<upsertFastQuery, upsertFastVariables>(UPSERT_FAST)
	const [updateFast] = useMutation<updateFastQuery, updateFastVariables>(UPDATE_FAST)
	const [getFast, { data }] = useLazyQuery<getFasting, getFastingVariables>(GET_FAST, {
		variables: { id: `${entry_date}-${id}` },
		fetchPolicy: 'cache-first',
	})

	const onClickStart = () => {
		const start = new Date()
		const v = {
			id: `${entry_date}-${id}`,
			user_id: id,
			entry_date,
			start_time: start,
		}
		upsertFast({ variables: v })
	}

	const onClickEnd = () => {
		const end = new Date()
		updateFast({
			variables: { id: `${entry_date}-${id}`, end_time: end, start_time: data?.fitly_fast_by_pk?.start_time },
		})
	}

	const onSelectFeeling = (feeling: FastFeelingsEnum) => {
		if (data?.fitly_fast_by_pk?.start_time) {
			updateFast({
				variables: {
					id: `${entry_date}-${id}`,
					feeling,
					start_time: data?.fitly_fast_by_pk?.start_time,
				},
			})
		}
	}

	const onClickEditStart = () => {
		setShow(true)
		setEdit('start')
	}

	const onClickEditEnd = () => {
		setShow(true)
		setEdit('end')
	}

	const onAcceptDateChange = (date: any) => {
		const time = formatCalendarDate(date)
		if (timeEdit === 'start') {
			updateFast({
				variables: { id: `${entry_date}-${id}`, start_time: time },
			})
		} else if (timeEdit === 'end') {
			updateFast({
				variables: {
					id: `${entry_date}-${id}`,
					end_time: time,
					start_time: data?.fitly_fast_by_pk?.start_time,
				},
			})
		}
		setShow(false)
	}

	useEffect(() => {
		getFast()
		if (!data?.fitly_fast_by_pk?.start_time) return
		const timer = setInterval(() => {
			const timerFormat = data?.fitly_fast_by_pk?.end_time
				? formatDistance(
						new Date(data?.fitly_fast_by_pk?.end_time).getTime(),
						new Date(data?.fitly_fast_by_pk?.start_time).getTime()
				  )
				: distanceInWordsToNow(formatDateEntry(data?.fitly_fast_by_pk?.start_time)!)
			setTimer(timerFormat)
		}, 6000)
		return () => clearInterval(timer)
	}, [getFast, data])

	return (
		<>
			<Paper className={root} elevation={6}>
				<DateTimePicker
					label="Edit Start"
					show={show}
					onAccept={onAcceptDateChange}
					selectedDate={selectedDate}
					handleDateChange={handleDateChange}
				/>
				<div className={start}>
					<Button
						variant="contained"
						color="primary"
						size="small"
						onClick={onClickStart}
						disabled={data?.fitly_fast_by_pk?.start_time}
					>
						Start
					</Button>
					<EditTwoToneIcon className={edit} onClick={onClickEditStart} />
				</div>

				<div className={end}>
					<Button
						variant="contained"
						size="small"
						color="secondary"
						onClick={onClickEnd}
						disabled={!data?.fitly_fast_by_pk?.start_time || data?.fitly_fast_by_pk?.end_time}
					>
						End
					</Button>
					<EditTwoToneIcon className={edit} onClick={onClickEditEnd} />
				</div>
			</Paper>

			<Paper className={updates} elevation={6}>
				<h5 hidden={!data?.fitly_fast_by_pk?.start_time}>
					{' '}
					Started :<span> &nbsp; {formatStartTime(data?.fitly_fast_by_pk?.start_time)}</span>
				</h5>
				<Feeling onSelectFeeling={onSelectFeeling} />
				<h6 hidden={!data?.fitly_fast_by_pk?.start_time}>{timer}</h6>
			</Paper>
		</>
	)
}
