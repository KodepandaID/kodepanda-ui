import * as React from 'react'
import { ButtonDropdown, ButtonDropdownHorizontal } from "../src"

export default { title: 'Components/Button Dropdown' }

export const Basic = () => {
  return(
    <div className="flex items-center justify-center">
      <ButtonDropdown dropdownIconHeight="4">
        Options
        <ButtonDropdown.Item>New Tab</ButtonDropdown.Item>
        <ButtonDropdown.Item>New Window</ButtonDropdown.Item>
        <ButtonDropdown.Item disabled icon="shield-check">New Private Window</ButtonDropdown.Item>
        <ButtonDropdown.Item>
          Favorites
          <ButtonDropdownHorizontal>
            <ButtonDropdown.Item>New Tab</ButtonDropdown.Item>
            <ButtonDropdown.Item>New Window</ButtonDropdown.Item>
            <ButtonDropdown.Item>Download</ButtonDropdown.Item>
          </ButtonDropdownHorizontal>
        </ButtonDropdown.Item>
        <ButtonDropdown.Item icon="cloud-download">Download</ButtonDropdown.Item>
      </ButtonDropdown>
    </div>
  )
}

export const Size = () => {
  return(
    <div className="flex items-center justify-center">
      <ButtonDropdown
      fontSize="xs" iconHeight="3"
      px="2" py="2"
      dropdownFontSize="xs">
        Options
        <ButtonDropdown.Item>New Tab</ButtonDropdown.Item>
        <ButtonDropdown.Item>New Window</ButtonDropdown.Item>
        <ButtonDropdown.Item>Favorites</ButtonDropdown.Item>
        <ButtonDropdown.Item>Download</ButtonDropdown.Item>
      </ButtonDropdown>
    </div>
  )
}
