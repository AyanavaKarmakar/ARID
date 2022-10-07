import { MD3Colors, ProgressBar } from 'react-native-paper'
import { useEffect, useState } from 'react'

export const Loading = () => {
  const [progressValue, setProgressValue] = useState(0)
  const INTERVAL_MS = 100

  useEffect(() => {
    setInterval(() => {
      if (progressValue < 1.0) setProgressValue((previousState) => previousState + 0.1)
    }, INTERVAL_MS)
  }, [])

  return <ProgressBar progress={progressValue} color={MD3Colors.error50} />
}
