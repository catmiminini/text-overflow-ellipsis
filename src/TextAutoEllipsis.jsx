import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { isSingleLineOverflow } from './utils'

export const SingleLineCSSEllipsis = forwardRef(
  ({ children, ref, className, style = {} }) => {
    return (
      <div
        ref={ref}
        className={'single-line-ellipsis ' + className}
        style={style}
      >
        {children}
      </div>
    )
  }
)

export const MultiLinesCSSEllipsis = forwardRef(
  ({ children, ref, lines = 2, className = '', style = {} }) => {
    // height will be ignored, because it's not supported by WebkitLineClamp
    const { height, minHeight, maxHeight, ...restStyle } = style
    return (
      <div
        ref={ref}
        className={'multi-line-ellipsis ' + className}
        style={{
          WebkitLineClamp: lines,
          ...restStyle,
        }}
      >
        {children}
      </div>
    )
  }
)

export const SingleLineEllipsis = ({
  children,
  className,
  overFlowCallback,
  tooltipWrapper,
  tooltipPropName = 'title',
}) => {
  const [isOverflow, setIsOverflow] = useState(false)
  const ref = useRef()

  useEffect(() => {
    let timer = null
    const initIsOverFlow = () => {
      timer = setTimeout(() => {
        if (ref.current) {
          setIsOverflow(isSingleLineOverflow(ref.current))
          clearTimeout(timer)
        } else {
          initIsOverFlow()
        }
      }, 100)
    }
    initIsOverFlow()
  }, [children])

  useEffect(() => {
    typeof overFlowCallback === 'function' && overFlowCallback()
  }, [isOverflow])

  const render = () => {
    if (
      (typeof tooltipWrapper === 'function' ||
        typeof tooltipWrapper?.render === 'function') &&
      isOverflow
    ) {
      const TootipWrapper = tooltipWrapper
      const tooltipProps = {
        [tooltipPropName]: children,
      }
      return (
        <TootipWrapper {...tooltipProps}>
          <div ref={ref} className={'single-line-ellipsis ' + className}>
            {children}
          </div>
        </TootipWrapper>
      )
    } else {
      return (
        <div ref={ref} className={'single-line-ellipsis ' + className}>
          {children}
        </div>
      )
    }
  }

  return render()
}
