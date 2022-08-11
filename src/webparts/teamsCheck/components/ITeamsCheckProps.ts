import { WebPartContext } from "@microsoft/sp-webpart-base";
import { DisplayMode } from "@microsoft/sp-core-library";
export interface ITeamsCheckProps {
  title: string;
  displayMode: DisplayMode;
  context: WebPartContext;
  searchFirstName: boolean;
  updateTitleProperty: (value: string) => void;
  searchProps?: string;
  clearTextSearchProps?: string;
  pageSize?: number;
  platformIsTeams: boolean;
  updateSearchProps: (value: string) => void;
  updateClearTextSearchProps: (value: string) => void;
  updatePageSize: (value: number) => void;
  updateSearchFirstName: (value: boolean) => void;
}
