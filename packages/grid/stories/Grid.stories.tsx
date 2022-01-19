import * as React from 'react'
import { Grid } from "../src"

export default { title: 'Components/Grid' }

export const ColumnWidth = () => {
  return(
    <div className="flex flex-col space-y-5">
      <Grid px="5" py="5">
        <Grid.Column width="full" className="bg-purple-500 rounded-lg">
          <p className="text-white text-center text-2xl font-bold">Full</p>
        </Grid.Column>
      </Grid>
      <Grid px="5" py="5">
        <Grid.Column width="4/5" className="bg-purple-500 rounded-lg">
          <p className="text-white text-center text-2xl font-bold">4/5</p>
        </Grid.Column>
        <Grid.Column width="auto" className="bg-gray-200 rounded-lg">
          <p className="text-white text-center text-2xl font-bold">Auto</p>
        </Grid.Column>
        <Grid.Column width="auto" className="bg-gray-200 rounded-lg">
          <p className="text-white text-center text-2xl font-bold">Auto</p>
        </Grid.Column>
      </Grid>
      <Grid px="5" py="5">
        <Grid.Column width="3/4" className="bg-purple-500 rounded-lg">
          <p className="text-white text-center text-2xl font-bold">3/4</p>
        </Grid.Column>
        <Grid.Column width="auto" className="bg-gray-200 rounded-lg">
          <p className="text-white text-center text-2xl font-bold">Auto</p>
        </Grid.Column>
        <Grid.Column width="auto" className="bg-gray-200 rounded-lg">
          <p className="text-white text-center text-2xl font-bold">Auto</p>
        </Grid.Column>
      </Grid>
      <Grid px="5" py="5">
        <Grid.Column width="2/3" className="bg-purple-500 rounded-lg">
          <p className="text-white text-center text-2xl font-bold">2/3</p>
        </Grid.Column>
        <Grid.Column width="auto" className="bg-gray-200 rounded-lg">
          <p className="text-white text-center text-2xl font-bold">Auto</p>
        </Grid.Column>
        <Grid.Column width="auto" className="bg-gray-200 rounded-lg">
          <p className="text-white text-center text-2xl font-bold">Auto</p>
        </Grid.Column>
      </Grid>
      <Grid px="5" py="5">
        <Grid.Column width="1/2" className="bg-purple-500 rounded-lg">
          <p className="text-white text-center text-2xl font-bold">1/2</p>
        </Grid.Column>
        <Grid.Column width="auto" className="bg-gray-200 rounded-lg">
          <p className="text-white text-center text-2xl font-bold">Auto</p>
        </Grid.Column>
        <Grid.Column width="auto" className="bg-gray-200 rounded-lg">
          <p className="text-white text-center text-2xl font-bold">Auto</p>
        </Grid.Column>
      </Grid>
      <Grid px="5" py="5">
        <Grid.Column width="2/5" className="bg-purple-500 rounded-lg">
          <p className="text-white text-center text-2xl font-bold">2/5</p>
        </Grid.Column>
        <Grid.Column width="auto" className="bg-gray-200 rounded-lg">
          <p className="text-white text-center text-2xl font-bold">Auto</p>
        </Grid.Column>
        <Grid.Column width="auto" className="bg-gray-200 rounded-lg">
          <p className="text-white text-center text-2xl font-bold">Auto</p>
        </Grid.Column>
      </Grid>
      <Grid px="5" py="5">
        <Grid.Column width="1/3" className="bg-purple-500 rounded-lg">
          <p className="text-white text-center text-2xl font-bold">1/3</p>
        </Grid.Column>
        <Grid.Column width="auto" className="bg-gray-200 rounded-lg">
          <p className="text-white text-center text-2xl font-bold">Auto</p>
        </Grid.Column>
        <Grid.Column width="auto" className="bg-gray-200 rounded-lg">
          <p className="text-white text-center text-2xl font-bold">Auto</p>
        </Grid.Column>
      </Grid>
      <Grid px="5" py="5">
        <Grid.Column width="1/4" className="bg-purple-500 rounded-lg">
          <p className="text-white text-center text-2xl font-bold">1/4</p>
        </Grid.Column>
        <Grid.Column width="auto" className="bg-gray-200 rounded-lg">
          <p className="text-white text-center text-2xl font-bold">Auto</p>
        </Grid.Column>
        <Grid.Column width="auto" className="bg-gray-200 rounded-lg">
          <p className="text-white text-center text-2xl font-bold">Auto</p>
        </Grid.Column>
      </Grid>
      <Grid px="5" py="5">
        <Grid.Column width="1/5" className="bg-purple-500 rounded-lg">
          <p className="text-white text-center text-2xl font-bold">1/5</p>
        </Grid.Column>
        <Grid.Column width="auto" className="bg-gray-200 rounded-lg">
          <p className="text-white text-center text-2xl font-bold">Auto</p>
        </Grid.Column>
        <Grid.Column width="auto" className="bg-gray-200 rounded-lg">
          <p className="text-white text-center text-2xl font-bold">Auto</p>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export const GridNested = () => {
  return(
    <Grid>
      <Grid.Column width="full">
        <div className="bg-purple-500 rounded-lg px-5 py-5">
          <p className="text-white text-center text-2xl font-bold">4/5</p>
        </div>
        <Grid.Column nested py="5">
          <Grid.Column width="1/2" className="bg-gray-200 rounded-lg px-5 py-5">
            <p className="text-white text-center text-2xl font-bold">1/2</p>
          </Grid.Column>
          <Grid.Column width="1/2" className="bg-gray-200 rounded-lg px-5 py-5">
            <p className="text-white text-center text-2xl font-bold">1/2</p>
          </Grid.Column>
        </Grid.Column>
      </Grid.Column>
    </Grid>
  )
}
