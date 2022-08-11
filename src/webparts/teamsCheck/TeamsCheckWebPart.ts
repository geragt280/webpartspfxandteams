import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneToggle,
  IPropertyPaneToggleProps,
  PropertyPaneSlider
} from '@microsoft/sp-property-pane';
import { PaneConfigs } from './PaneConfigs';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';
import * as strings from 'TeamsCheckWebPartStrings';
import PaneConfigClass from './PaneConfigs';
import { ITeamsCheckProps } from './components/ITeamsCheckProps';
import DirectoryHook from "./components/DirectoryHook";
// import { IDirectoryProps } from "./components/IDirectoryProps";
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { initializeIcons as initializeIcons2  } from '@microsoft/office-ui-fabric-react-bundle';

export interface ITeamsCheckWebPartProps {
  title: string;
  searchFirstName: boolean;
  searchProps: string;
  clearTextSearchProps: string;
  pageSize: number;
}

export default class TeamsCheckWebPart extends BaseClientSideWebPart<ITeamsCheckWebPartProps> {


  protected onInit(): Promise<void> {

    return super.onInit().then(() => {
      initializeIcons();
      initializeIcons2();

      const pconfigList = new PaneConfigClass();
      pconfigList.getAllConfigData();
    });
  }

  public render(): void {
    let title: string = '';
    let subTitle: string = '';
    let siteTabTitle: string = '';

    if(!this.properties.title){
      this.properties.title = PaneConfigs.webparttitle;
      this.properties.pageSize = PaneConfigs.pageSize;
      this.properties.clearTextSearchProps = PaneConfigs.clearTextSearchProps;
      this.properties.searchFirstName = PaneConfigs.searchFirstName;
      this.properties.searchProps = PaneConfigs.searchProps;
    }

    if (this.context.sdks.microsoftTeams) {
      // We have teams context for the web part
      title = "Welcome to Teams!";
      subTitle = "Building custom enterprise tabs for your business.";
      siteTabTitle = "We are in the context of following Team: " + this.context.sdks.microsoftTeams.context.teamName;
    }
    else
    {
      // We are rendered in normal SharePoint context
      title = "Welcome to SharePoint!";
      subTitle = "Customize SharePoint experiences using Web Parts.";
      siteTabTitle = "We are in the context of following site: " + this.context.pageContext.web.title;
    }
    const element: React.ReactElement<ITeamsCheckProps> = React.createElement(
      DirectoryHook,
      {
        title: this.properties.title,
        context: this.context,
        searchFirstName: this.properties.searchFirstName,
        displayMode: 1,
        updateTitleProperty: (value: string) => {
            this.properties.title = value;
        },
        searchProps: this.properties.searchProps,
        clearTextSearchProps: this.properties.clearTextSearchProps,
        pageSize: this.properties.pageSize ? this.properties.pageSize : 2,
        platformIsTeams: this.context.sdks.microsoftTeams ? true : false,
        updateSearchProps: (value: string) => {
          this.properties.searchProps = value;
        },
        updateClearTextSearchProps: (value: string) => {
          this.properties.clearTextSearchProps = value;
        },
        updatePageSize: (value: number) => {
          this.properties.pageSize = value;
        },
        updateSearchFirstName: (value: boolean) => {
          this.properties.searchFirstName = value;
        }
      }
    );
    ReactDom.render(element, this.domElement);
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    const {
      semanticColors
    } = currentTheme;
    this.domElement.style.setProperty('--bodyText', semanticColors.bodyText);
    this.domElement.style.setProperty('--link', semanticColors.link);
    this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered);

  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("title", {
                  label: strings.TitleFieldLabel
                }),
                PropertyPaneToggle("searchFirstName", {
                    checked: false,
                    label: "Search on First Name ?"
                }),
                PropertyPaneTextField('searchProps', {
                    label: strings.SearchPropsLabel,
                    description: strings.SearchPropsDesc,
                    value: this.properties.searchProps,
                    multiline: false,
                    resizable: false
                }),
                PropertyPaneTextField('clearTextSearchProps', {
                    label: strings.ClearTextSearchPropsLabel,
                    description: strings.ClearTextSearchPropsDesc,
                    value: this.properties.clearTextSearchProps,
                    multiline: false,
                    resizable: false
                }),
                PropertyPaneSlider('pageSize', {
                    label: 'Results per page',
                    showValue: true,
                    max: 20,
                    min: 2,
                    step: 2,
                    value: this.properties.pageSize
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
