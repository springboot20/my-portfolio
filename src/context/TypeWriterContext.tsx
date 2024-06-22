import React, {
  useState,
  useEffect,
  useMemo,
  createContext,
  useRef,
} from 'react'

interface TypeWriterContext {
  textToDisplay: React.MutableRefObject<string>
}

export const TypeWriterContext = createContext<TypeWriterContext>(
  {} as TypeWriterContext,
)

export const TypeWriterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false)
  const textToDisplay = useRef('')
  // eslint-disable-next-line prefer-const
  const wait = 600

  let currentWordIndex = 0

  useEffect(() => {
    const words = ['Developer', 'Designer']
    let speed = 600

    const type = () => {
      const current = currentWordIndex % words.length
      const fullText = words[current]

      if (isDeleting) {
        textToDisplay.current = fullText.substring(0, fullText.length - 1)
      } else {
        textToDisplay.current = fullText.substring(0, fullText.length + 1)
      }

      if (isDeleting) {
        speed /= 2
      }

      if (!isDeleting && textToDisplay.current === fullText) {
        speed = wait

        setIsDeleting(true)
      } else if (isDeleting && textToDisplay.current === '') {
        setIsDeleting(false)

        currentWordIndex++

        speed = wait
      }
      setTimeout(() => type, speed)
    }

    type()
  }, [currentWordIndex, isDeleting])

  console.log(textToDisplay)

  const values = useMemo(
    () => ({
      textToDisplay,
    }),
    [textToDisplay],
  )

  return (
    <TypeWriterContext.Provider value={values}>
      {children}
    </TypeWriterContext.Provider>
  )
}
