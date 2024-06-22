import { useContext } from 'react'
import { TypeWriterContext } from '../context/TypeWriterContext'

export const useTypeWriter = () => useContext(TypeWriterContext)
