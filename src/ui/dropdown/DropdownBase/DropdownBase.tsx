import { ReactElement, useRef, useState } from 'react'
import { AnyStyledComponent } from 'styled-components'
import Downshift, { DownshiftProps, GetToggleButtonPropsOptions } from 'downshift'

import { OutsideClickWatcher } from 'ui/helpers/OutsideClickWatcher'
import {
  Container,
  Menu as DefaultMenu,
  MenuItem,
  Title,
  ToggleArrowIcon,
  ToggleButton as DefaultToggle,
} from './DropdownStyled'

export type Item = {
  value: string
  content?: ReactElement | string
  selected?: boolean
}

export type DropdownBaseProps = Omit<DownshiftProps<Item>, 'children'> & {
  items: Item[]
  id: string
  menuWidth?: number
  toggleButton?: AnyStyledComponent
  menu?: AnyStyledComponent
  title?: ReactElement | string
}

export const DropdownBase = (props: DropdownBaseProps) => {
  const {
    items,
    id,
    title,
    menuWidth,
    toggleButton: ToggleButton = DefaultToggle,
    menu: Menu = DefaultMenu,
    onSelect,
    ...restProps
  } = props
  const [open, setOpen] = useState(false)
  const toggleButtonRef = useRef<HTMLButtonElement>(null)

  const handleOutsideClick = () => {
    setOpen(false)
    toggleButtonRef.current?.blur()
  }

  return (
    <OutsideClickWatcher
      disabled={!open}
      disableOnClickOutside={!open}
      onClick={handleOutsideClick}>
      <Downshift
        {...restProps}
        id={id}
        isOpen={open}
        onSelect={(selectedItem, downshiftSet) => {
          onSelect?.(selectedItem, downshiftSet)
        }}
        itemToString={(item) =>
          (typeof item?.content === 'string' ? item?.content : item?.value) || ''
        }>
        {(downshiftSet) => {
          const {
            isOpen,
            getRootProps,
            getToggleButtonProps,
            getMenuProps,
            getItemProps,
            selectedItem,
            highlightedIndex,
          } = downshiftSet
          const toggleButtonBaseProps: GetToggleButtonPropsOptions = {
            ref: toggleButtonRef,
            open: isOpen,
            onClick: () => setOpen((opened) => !opened),
          }

          return (
            <Container {...getRootProps({ refKey: 'ref' })}>
              <ToggleButton
                role='button'
                {...getToggleButtonProps(toggleButtonBaseProps)}>
                <>
                  <Title>{title}</Title>
                  <ToggleArrowIcon fill='greyLight' />
                </>
              </ToggleButton>
              {isOpen && (
                <Menu {...getMenuProps({ refKey: 'ref' })} menuWidth={menuWidth}>
                  {items.map((item, index) => {
                    const selected = selectedItem?.value === item.value
                    const highlighted = selected || highlightedIndex === index

                    const itemProps = getItemProps({
                      key: item.value,
                      item,
                      isSelected: selected,
                    })

                    return (
                      <MenuItem {...itemProps} highlighted={highlighted} selectable>
                        {item.content || item.value}
                      </MenuItem>
                    )
                  })}
                </Menu>
              )}
            </Container>
          )
        }}
      </Downshift>
    </OutsideClickWatcher>
  )
}
