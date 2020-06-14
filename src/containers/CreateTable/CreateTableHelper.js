const updateDataSchema = (columnIndexName, dataSchema, toInsertIndex) => {
    let i = 0;
    let currentSchema = {}
    for (let schema in dataSchema){
        if(i===toInsertIndex){
            currentSchema = {...currentSchema, [columnIndexName]:null, [schema]:null}
            console.log(currentSchema)
        } else {
            currentSchema = {...currentSchema, [schema]:null}
        }
        i++;
    }
    return currentSchema;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

const createTitle = title =>{
    if(title.includes(" ")){
        return title.split(" ").map((title, index) =>{
            if(index===0){
                return title.toLowerCase();
            }
            return capitalizeFirstLetter(title);
        }).join("")
    }
    return title;
}

const createColumns = (dataSchema) => {
    console.log(dataSchema);
    const columns = []
    for (let schema in dataSchema){
        columns.push({data:schema})
    }
    return columns;
}


export const updateSettingItems = (toInsertIndex, title, dataSchema, columnHeaders, columns) =>{
    // create columnIndex name
    const columnIndexName = createTitle(title);
    // update dataSchema
    const updatedSchema   = updateDataSchema(columnIndexName, dataSchema, toInsertIndex)
    // update columnHeaders
    columnHeaders.splice(toInsertIndex,0, title)
    // update columns
    columns.splice(toInsertIndex,0, {data:columnIndexName})
    return [updatedSchema, columnHeaders, columns]
}