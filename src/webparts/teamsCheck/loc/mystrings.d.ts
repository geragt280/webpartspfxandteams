declare interface ITeamsCheckWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DropDownPlaceLabelMessage: string;
  DropDownPlaceHolderMessage: string;
  SearchPlaceHolder: string;
  TitleFieldLabel: string;
  SearchPropsLabel: string;
  DirectoryMessage: string;
  SearchPropsDesc: string;
  ClearTextSearchPropsLabel: string;
  ClearTextSearchPropsDesc: string;
  PagingLabel: string;
  LoadingText: string;
}

declare module 'TeamsCheckWebPartStrings' {
  const strings: ITeamsCheckWebPartStrings;
  export = strings;
}
