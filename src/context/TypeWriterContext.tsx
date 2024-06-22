import React, {
  useState,
  useEffect,
  useMemo,
  createContext,
  useRef,
  useCallback,
} from 'react'

interface TypeWriterContext {
  textToDisplay: React.MutableRefObject<string>
  type: () => void
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
  const wait = useRef<number>(600)

  let currentWordIndex = 0
  const words = useMemo(() => ['Developer', 'Designer'], [])
  const speed = useRef<number>(600)

  const type = useCallback(() => {
    const current = currentWordIndex % words.length
    const fullText = words[current]

    if (isDeleting) {
      textToDisplay.current = fullText.substring(0, fullText.length - 1)
    } else {
      textToDisplay.current = fullText.substring(0, fullText.length + 1)
    }
    console.log(textToDisplay.current)

    if (isDeleting) {
      speed.current /= 2
    }


    if (!isDeleting && textToDisplay.current === fullText) {
      speed.current = wait.current

      setIsDeleting(true)
    } else if (isDeleting && textToDisplay.current === '') {
      setIsDeleting(false)

      currentWordIndex++

      speed.current = 500
    }
    setTimeout(() => type(), speed.current)
  }, [currentWordIndex, isDeleting, words])

  useEffect(() => {
    type()
  }, [type])

  console.log(textToDisplay)

  const values = useMemo(
    () => ({
      textToDisplay,
      type,
    }),
    [textToDisplay, type],
  )

  return (
    <TypeWriterContext.Provider value={values}>
      {children}
    </TypeWriterContext.Provider>
  )
}
