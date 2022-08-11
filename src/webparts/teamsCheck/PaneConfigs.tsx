import { sp } from "@pnp/sp";

export const PaneConfigs = {
    webparttitle: "Web Part Title",
    searchFirstName: false,
    searchProps: "",
    clearTextSearchProps: "",
    pageSize:2,
};

export default class PaneConfigClass{
    
    public async getAllConfigData(){
        try {
            const items: any = await sp.web.lists.getByTitle("Directory Config List").items.getAll();
            PaneConfigs.webparttitle = items[0].Title;
            PaneConfigs.clearTextSearchProps = items[0].ClearTextSearchProps;
            PaneConfigs.pageSize = items[0].PageSize;
            PaneConfigs.searchFirstName = items[0].SearchFirstName;
            PaneConfigs.searchProps = items[0].SearchProps;
        } catch (error) {
            console.log("error in insert", error);
        }
    }

    public async saveAllConfigData(){
        try{
            let list = sp.web.lists.getByTitle("Directory Config List");

            const i = await list.items.getById(2).update({
            Title: PaneConfigs.webparttitle,
            ClearTextSearchProps: PaneConfigs.clearTextSearchProps,
            PageSize: PaneConfigs.pageSize,
            SearchFirstName: PaneConfigs.searchFirstName,
            SearchProps: PaneConfigs.searchProps,               
            });
        }catch(exception){
            console.log("error in insert", exception);
        }
    }
}

