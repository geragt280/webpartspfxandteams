declare interface ITeamsCheckWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
  DropDownPlaceLabelMessage: string;
  DropDownPlaceHolderMessage: string;
  SearchPlaceHolder: string;
  TitleFieldLabel: string;
  DirectoryMessage: string;
  LoadingText: string;
  SearchPropsLabel: string;
  SearchPropsDesc: string;
  ClearTextSearchPropsLabel: string;
  ClearTextSearchPropsDesc: string;
  PagingLabel: string;
}

declare module 'TeamsCheckWebPartStrings' {
  const strings: ITeamsCheckWebPartStrings;
  export = strings;
}
