import * as React from "react";
import { PanelType } from "office-ui-fabric-react/lib-commonjs/Panel";
export interface IConfigurationPanelProps{
    updateTitleProperty: (value: string) => void;
    updateSearchProps: (value: string) => void;
    updateClearTextSearchProps: (value: string) => void;
    updatePageSize: (value: number) => void;
    updateSearchFirstName: (value: boolean) => void;
    uitoggler: () => void;
}