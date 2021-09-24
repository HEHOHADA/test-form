import { Component } from 'react'
import onClickOutside, { InjectedOnClickOutProps } from 'react-onclickoutside'

interface OutsideClickOptimizerProps extends InjectedOnClickOutProps {
  onClick: (evt: MouseEvent | TouchEvent) => void
  disabled?: boolean
  disableFor?: HTMLButtonElement | HTMLDivElement | HTMLAnchorElement | null
}

class OutsideClickOptimizer extends Component<OutsideClickOptimizerProps> {
  public componentDidUpdate(prevProps: OutsideClickOptimizerProps) {
    const { disabled, enableOnClickOutside, disableOnClickOutside } = this.props

    if (disabled === prevProps.disabled) {
      return
    }
    if (disabled) {
      disableOnClickOutside()
    } else {
      enableOnClickOutside()
    }
  }

  public handleClickOutside = (event: MouseEvent | TouchEvent) => {
    const element = this.props.disableFor

    if (event && element) {
      const { target } = event

      if (target === element || element.contains(target as Node)) return
    }
    this.props.onClick(event)
  }

  public render() {
    return <>{this.props.children}</>
  }
}

export const OutsideClickWatcher = onClickOutside(OutsideClickOptimizer)
