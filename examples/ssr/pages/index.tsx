import * as React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Box } from '@zenbu-ui/box'
import { Button } from '@zenbu-ui/button'
import { Flexbox } from '@zenbu-ui/flexbox'
import { Menu } from '@zenbu-ui/menu'
import { Header, Text } from '@zenbu-ui/typography'
import { darkMode, toggleDarkMode } from './_app'

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>SSR Testing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
      as="main" border={false} rounded="none"
      width="screen" height="screen"
      color="gray" colorContrast="100" darkColor="gray" darkColorContrast="700"
      px="10" py="10">
        <Menu
        logo={(
          <a href="https://kodepanda.com">
            <img src="https://kodepanda.com/image/kodepanda-full-logo.svg" alt="Logo Kodepanda" width={150} />
          </a>
        )}
        color="transparent" border={false}>
          <Menu.Content position="right">
          <Menu.Item>
            <Button
            color="transparent"
            icon={darkMode ? "light-bulb" : "moon"} iconColor="black" darkIconColor="white"
            onClick={() => toggleDarkMode()}/>
          </Menu.Item>
        </Menu.Content>
        </Menu>

        <Box color="transparent" border={false} mt="24">
          <Flexbox direction="col" alignItems="center" justify="center" mt="36" spaceY="4">
            <Header as="h3" color="gray" colorContrast="700" darkColor="white" textAlign="center">
              Don't <br />
              <Header as="h4" marker
              color={darkMode ? "white" : "gray"} colorContrast="700"
              markerColor={darkMode ? "blue" : "gray"} markerColorContrast={darkMode ? "500" : "300"}>WASTE YOUR TIME</Header>
              <br />
              to build UI component.
            </Header>
            <Text>Unstyled, Styling with props and Accessible</Text>
          </Flexbox>
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default Home
