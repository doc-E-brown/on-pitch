import { describe, expect, it } from 'vitest'
import { render, renderHook, screen } from '@testing-library/react'
import { useInMatchForm } from './useInMatchForm'

describe('useInMatchForm', () => {
  it('should load a blank form when a match does not exit', () => {
    const { result } = renderHook(() => useInMatchForm({ matchId: 'non-existent-match' }))
    expect(result.current.getValues()).toEqual({})
  })
})
