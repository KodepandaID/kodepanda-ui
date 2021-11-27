import * as React from "react"
import { Statistic} from "../src"
import { Icon } from "../../icon/src"

export default { title: 'Components/Statistic' }

export const Basic = () => {
  return(
    <Statistic title="Active Users" value={1000} />
  )
}

export const Prefix = () => {
  return(
    <Statistic title="Wallet" value={1000} prefix="Rp" />
  )
}

export const Suffix = () => {
  return(
    <Statistic title="Orders" value={100} suffix="K" />
  )
}

export const Coloring = () => {
  return(
    <Statistic
    title="Active Users" titleColor="blue" titleColorContrast="400"
    value={1000} valueColor="blue" valueColorContrast="700" />
  )
}

export const BasicIcon = () => {
  return(
    <Statistic
    icon={(<Icon icon="users-solid" color="black" fontSize="lg" />)}
    title="Active Users" value={1000} />
  )
}

export const SvgIcon = () => {
  return(
    <Statistic
    icon={(<img alt="Icon wallet for statistic total wallet" src="https://www.svgrepo.com/show/120969/wallet.svg" width="40" />)}
    title="Wallet" value={1000} prefix="Rp" />
  )
}
