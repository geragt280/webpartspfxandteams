import * as React from 'react';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { useBoolean } from '@fluentui/react-hooks';
import styles from "./TeamsCheck.module.scss";
import { IConfigurationPanelProps } from './IConfigurationPanelProps';
import  {IIconProps} from 'office-ui-fabric-react/lib/Icon';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { Slider } from 'office-ui-fabric-react/lib/Slider';
import PaneConfigClass, { PaneConfigs } from '../PaneConfigs';
// The panel type and description are passed in by the PanelSizesExample component (later in this file)
export const ConfigurationPanel: React.FunctionComponent<IConfigurationPanelProps> = props => {
  const [panelType, setpanelType] = React.useState(PanelType.smallFixedFar);
  const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);
  const emojiIcon: IIconProps = { iconName: 'Settings' };
  const [toggleSearchWithFN, { toggle: toggleSearchWithFirstName }] = useBoolean(PaneConfigs.searchFirstName);
  const [title, setTitle] = React.useState("");
  const [ranonce, setranonce] = React.useState(false);

  const onTitleChange = (event) => {
      props.updateTitleProperty(event.target.value);
      PaneConfigs.webparttitle = event.target.value;
      setTitle(event.target.value);
      props.uitoggler();
  };

  const pconfig = new PaneConfigClass();

  const onPanelClose = () => {
    dismissPanel();
    pconfig.saveAllConfigData();
  };

  React.useEffect(() => {
    PaneConfigs.searchFirstName = toggleSearchWithFN;
    props.updateSearchFirstName(toggleSearchWithFN);
  }, [toggleSearchWithFN]);

  const onSearchPropsChange = (event) => {
    PaneConfigs.searchProps = event.target.value;
    props.updateSearchProps(event.target.value);
    props.uitoggler();
  };

  const onClearTextSearchPropsChange = (event) => {
    PaneConfigs.clearTextSearchProps = event.target.value;
    props.updateClearTextSearchProps(event.target.value);
    props.uitoggler();
  };

  const onPageSizeChange = (event) => {
    PaneConfigs.pageSize = event;
    props.updatePageSize(event);
    props.uitoggler();
  };
  
  if(PaneConfigs.searchFirstName && !toggleSearchWithFN && !ranonce){
    toggleSearchWithFirstName();
    setranonce(true);
  }
  return (
    <div>
      <IconButton  className={styles.settingIconAlignment} onClick={openPanel} iconProps={emojiIcon} title="Setting" ariaLabel="Setting" disabled={false} checked={false} />
      <Panel
        isOpen={isOpen}
        onDismiss={onPanelClose}
        type={panelType}
        customWidth={panelType === PanelType.custom || panelType === PanelType.customNear ? '888px' : undefined}
        closeButtonAriaLabel="Close"
        headerText="Webpart settings for Teams app"
      >
        <p>
          Teams Personal Directory
        </p>
        <p>
          Properties
        </p>
        <TextField label="Web Part Title" onChange={onTitleChange} value={PaneConfigs.webparttitle}/>
        <Toggle label="Search on First Name ?" checked={toggleSearchWithFN} onChange={toggleSearchWithFirstName}  />
        <TextField label="Properties to search" description="Enter the properties separated by comma to be used for search" onChange={onSearchPropsChange} value={PaneConfigs.searchProps} />
        <TextField label="Properties whose values are not replaced" description="Enter the properties separated by comma to be sent as it is without replacing space with '+'" onChange={onClearTextSearchPropsChange} value={PaneConfigs.clearTextSearchProps} />
        <Slider label="Snapping slider example" min={2} max={20} step={2} defaultValue={PaneConfigs.pageSize} showValue snapToStep onChange={onPageSizeChange} />
      </Panel>
    </div>
  );
};


