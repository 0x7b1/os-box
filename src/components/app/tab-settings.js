import React, { Component } from 'react';
import Input from '@jetbrains/ring-ui/components/input/input';
import ButtonSet from '@jetbrains/ring-ui/components/button-set/button-set';
import Toggle from '@jetbrains/ring-ui/components/toggle/toggle';
import Select from '@jetbrains/ring-ui/components/select/select';
import Panel from '@jetbrains/ring-ui/components/panel/panel';
import Button from '@jetbrains/ring-ui/components/button/button';
import {
  RemoveIcon,
  DownloadIcon,
} from '@jetbrains/ring-ui/components/icon';

export default function TabSettings(props) {
  return (
    <>
      <form className="inputs">
        <Input
          label="Box Name"
          defaultValue="My Phone"
        />
        <Select
          filter
          compact
          selected={0}
          label="Operating System"
          data={[
            {
              label: 'Windows',
              key: 0,
              type: 'packages',
              icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAUCAIAAACMMcMmAAAAKklEQVRIx2NgGAWjgAbAh/aI4S7t0agdI9COzx00Rwz/z9Ecjdox8uwAACkGSkKIaGlAAAAAAElFTkSuQmCC',
            },
            {
              label: 'Android',
              key: 0,
              type: 'packages',
              icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAUCAIAAACMMcMmAAAAKklEQVRIx2NgGAWjgAbAh/aI4S7t0agdI9COzx00Rwz/z9Ecjdox8uwAACkGSkKIaGlAAAAAAElFTkSuQmCC',
            },
            {
              label: 'Mac OS',
              key: 0,
              type: 'packages',
              icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAUCAIAAACMMcMmAAAAKklEQVRIx2NgGAWjgAbAh/aI4S7t0agdI9COzx00Rwz/z9Ecjdox8uwAACkGSkKIaGlAAAAAAElFTkSuQmCC',
            },
            {
              label: 'Linux',
              key: 0,
              type: 'packages',
              icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAUCAIAAACMMcMmAAAAKklEQVRIx2NgGAWjgAbAh/aI4S7t0agdI9COzx00Rwz/z9Ecjdox8uwAACkGSkKIaGlAAAAAAElFTkSuQmCC',
            },
          ]} />
        <br />
        <br />
        {/* <Toggle defaultChecked>Allow Comments</Toggle> */}
        <Toggle>Private</Toggle>
      </form>
      <br />
      {/* <h3>Advanced</h3>
      <Button icon={DownloadIcon}>Export Data as CSV</Button>
      <br />
      <Button icon={DownloadIcon}>Export Data as JSON</Button>
      <br />
      <br />
      <Button
        icon={RemoveIcon}
        danger
      >
        {'Delete Account'}
      </Button> */}
      <ButtonSet>
        <Button blue>{'Apply changes'}</Button>
        <Button>{'Cancel'}</Button>
      </ButtonSet>
    </>
  );
}
