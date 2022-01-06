import * as React from 'react'
import { Tabs } from "../src"
import { Text } from "../../typography/src"
import { Input } from "../../input/src"
import { Button } from "../../button/src"

export default { title: 'Components/Tabs' }

export const Basic = () => {
  return(
    <Tabs>
      <Tabs.Item title={(<Text span fontSize="sm">Account</Text>)}>
        <Text color="gray" colorContrast="600" fontSize="xs" mt="2">Make changes to your account here. Click save when you're done.</Text>

        <div className="mt-3">
          <Input fluid name="name" value="Yudha Pratama"
          label={(<Text span color="gray" colorContrast="600" fontSize="xs">Name</Text>)}
          borderColor="blue" borderColorContrast="500" mb="1.5" />
          <Input fluid name="username" value="@LordAur"
          label={(<Text span color="gray" colorContrast="600" fontSize="xs">Username</Text>)}
          borderColor="blue" borderColorContrast="500" />

          <div className="w-full flex justify-end mt-4">
            <Button color="blue" colorContrast="500" textColor="white">Save changes</Button>
          </div>
        </div>
      </Tabs.Item>

      <Tabs.Item title={(<Text span fontSize="sm">Password</Text>)}>
        <Text color="gray" colorContrast="600" fontSize="xs" mt="2">Change your password here. After saving, you'll be logged out.</Text>

        <div className="mt-3">
          <Input fluid name="current_password" type="password"
          label={(<Text span color="gray" colorContrast="600" fontSize="xs">Current Password</Text>)}
          borderColor="blue" borderColorContrast="500" mb="1.5" />
          <Input fluid name="password" type="password"
          label={(<Text span color="gray" colorContrast="600" fontSize="xs">New Password</Text>)}
          borderColor="blue" borderColorContrast="500" mb="1.5" />
          <Input fluid name="confirm_password" type="password"
          label={(<Text span color="gray" colorContrast="600" fontSize="xs">Confirm Password</Text>)}
          borderColor="blue" borderColorContrast="500" />

          <div className="w-full flex justify-end mt-4">
            <Button color="blue" colorContrast="500" textColor="white">Change password</Button>
          </div>
        </div>
      </Tabs.Item>
    </Tabs>
  )
}

export const Simple = () => {
  return(
    <Tabs simple>
      <Tabs.Item title={(<Text span fontSize="sm">Account</Text>)}>
        <Text color="gray" colorContrast="600" fontSize="xs" mt="2">Make changes to your account here. Click save when you're done.</Text>

        <div className="mt-3">
          <Input fluid name="name" value="Yudha Pratama"
          label={(<Text span color="gray" colorContrast="600" fontSize="xs">Name</Text>)}
          borderColor="blue" borderColorContrast="500" mb="1.5" />
          <Input fluid name="username" value="@LordAur"
          label={(<Text span color="gray" colorContrast="600" fontSize="xs">Username</Text>)}
          borderColor="blue" borderColorContrast="500" />

          <div className="w-full flex justify-end mt-4">
            <Button color="blue" colorContrast="500" textColor="white">Save changes</Button>
          </div>
        </div>
      </Tabs.Item>

      <Tabs.Item title={(<Text span fontSize="sm">Password</Text>)}>
        <Text color="gray" colorContrast="600" fontSize="xs" mt="2">Change your password here. After saving, you'll be logged out.</Text>

        <div className="mt-3">
          <Input fluid name="current_password" type="password"
          label={(<Text span color="gray" colorContrast="600" fontSize="xs">Current Password</Text>)}
          borderColor="blue" borderColorContrast="500" mb="1.5" />
          <Input fluid name="password" type="password"
          label={(<Text span color="gray" colorContrast="600" fontSize="xs">New Password</Text>)}
          borderColor="blue" borderColorContrast="500" mb="1.5" />
          <Input fluid name="confirm_password" type="password"
          label={(<Text span color="gray" colorContrast="600" fontSize="xs">Confirm Password</Text>)}
          borderColor="blue" borderColorContrast="500" />

          <div className="w-full flex justify-end mt-4">
            <Button color="blue" colorContrast="500" textColor="white">Change password</Button>
          </div>
        </div>
      </Tabs.Item>
    </Tabs>
  )
}

export const ActiveIndex = () => {
  return(
    <Tabs defaultActiveIndex={1}>
      <Tabs.Item title={(<Text span fontSize="sm">Account</Text>)}>
        <Text color="gray" colorContrast="600" fontSize="xs" mt="2">Make changes to your account here. Click save when you're done.</Text>

        <div className="mt-3">
          <Input fluid name="name" value="Yudha Pratama"
          label={(<Text span color="gray" colorContrast="600" fontSize="xs">Name</Text>)}
          borderColor="blue" borderColorContrast="500" mb="1.5" />
          <Input fluid name="username" value="@LordAur"
          label={(<Text span color="gray" colorContrast="600" fontSize="xs">Username</Text>)}
          borderColor="blue" borderColorContrast="500" />

          <div className="w-full flex justify-end mt-4">
            <Button color="blue" colorContrast="500" textColor="white">Save changes</Button>
          </div>
        </div>
      </Tabs.Item>

      <Tabs.Item title={(<Text span fontSize="sm">Password</Text>)}>
        <Text color="gray" colorContrast="600" fontSize="xs" mt="2">Change your password here. After saving, you'll be logged out.</Text>

        <div className="mt-3">
          <Input fluid name="current_password" type="password"
          label={(<Text span color="gray" colorContrast="600" fontSize="xs">Current Password</Text>)}
          borderColor="blue" borderColorContrast="500" mb="1.5" />
          <Input fluid name="password" type="password"
          label={(<Text span color="gray" colorContrast="600" fontSize="xs">New Password</Text>)}
          borderColor="blue" borderColorContrast="500" mb="1.5" />
          <Input fluid name="confirm_password" type="password"
          label={(<Text span color="gray" colorContrast="600" fontSize="xs">Confirm Password</Text>)}
          borderColor="blue" borderColorContrast="500" />

          <div className="w-full flex justify-end mt-4">
            <Button color="blue" colorContrast="500" textColor="white">Change password</Button>
          </div>
        </div>
      </Tabs.Item>
    </Tabs>
  )
}
