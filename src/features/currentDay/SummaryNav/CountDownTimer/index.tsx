import React from 'react'
import Countdown from 'react-countdown'

export default function CountDownTimer() {
	return <Countdown className="fast-timer" date={Date.now() + 900000} />
}
