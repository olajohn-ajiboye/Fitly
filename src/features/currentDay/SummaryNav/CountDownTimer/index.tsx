import React from 'react'
import Countdown from 'react-countdown'

interface TimerProps {
	date: number
}

export default function CountDownTimer({ date }: TimerProps) {
	return date ? <Countdown className="fast-timer" date={date} /> : null
}
