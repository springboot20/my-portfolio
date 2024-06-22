import React, {
  useState,
  useEffect,
  useMemo,
  createContext,
  useRef,
  useCallback,
} from 'react'

interface TypeWriterContextProps {
  textToDisplay: string
}

export const TypeWriterContext = createContext<TypeWriterContextProps>(
  {} as TypeWriterContextProps,
)

export const TypeWriterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false)
  const [textToDisplay, setTextToDisplay] = useState<string>('')
  const wait = useRef<number>(600)
  const currentWordIndex = useRef<number>(0)
  const words = useMemo(() => ['Developer', 'Designer'], [])
  const speed = useRef<number>(900)

  const type = useCallback(() => {
    const current = currentWordIndex.current % words.length
    const fullText = words[current]

    if (isDeleting) {
      setTextToDisplay((prev) => fullText.substring(0, prev.length - 1))
    } else {
      setTextToDisplay((prev) => fullText.substring(0, prev.length + 1))
    }

    if (!isDeleting && textToDisplay === fullText) {
      setIsDeleting(true)
      speed.current = wait.current
    } else if (isDeleting && textToDisplay === '') {
      setIsDeleting(false)
      currentWordIndex.current++
      speed.current = 900
    } 
    // else {
    //   speed.current = isDeleting ? 100 : 200
    // }
  }, [isDeleting, textToDisplay, words])

  useEffect(() => {
    setTimeout(type, speed.current)
  }, [type])

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
