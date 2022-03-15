declare interface ITeamsCheckWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
}

declare module 'TeamsCheckWebPartStrings' {
  const strings: ITeamsCheckWebPartStrings;
  export = strings;
}
