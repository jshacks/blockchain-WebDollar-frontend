/**
 * Created by Alexandru Ionut Budisteanu - SkyHub on 6/25/2017.
 * (C) BIT TECHNOLOGIES
 */

export default{

    SET_CURRENT_ROUTER_OBJECT: (state, { routerObject, notFound, url }) => {

        state.currentObject.object = routerObject;

        if (typeof url === 'undefined')
            if (state.currentObject.object  === null) url ='';
            else url = state.currentObject.object.URL||'';

        if (url === '/') state.currentObject.type = "home";
        else state.currentObject.type = "content";

        state.currentObject.pageURL = url;
        state.currentObject.notFound = notFound;
    },

    SET_CURRENT_ROUTER_PARAMS: (state, { pageIndex, pageType }) => {

        state.pageIndex = pageIndex;
        state.pageType = pageType;

    },

    SET_CURRENT_ROUTER_PARENT_OBJECT: (state, { routerObject, notFound, url }) => {

        state.parentObject.object = routerObject;

        if (url === '/') state.parentObject.type = "home";
        else state.parentObject.type = "content";

        state.parentObject.notFound = notFound;
    },

}