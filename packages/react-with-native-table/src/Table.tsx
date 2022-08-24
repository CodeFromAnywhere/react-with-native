import { Div } from "react-with-native";
import { TsInterface } from "code-types";
import { humanCase } from "convert-case";
import { makeArray, notEmpty } from "js-util";
import { getReferenceParameterInfo } from "schema-util";
const tdClassName =
  "whitespace-nowrap py-4 pr-3 text-sm first-of-type:font-medium text-gray-500 dark:text-gray-200 first-of-type:text-gray-900 first-of-type:dark:text-gray-100 first-of-type:sm:pl-6 first-of-type:md:pl-0";

/**
 * This contains the rows and columns of a table
 */
export type TableType<TModel extends { [key: string]: any }> = {
  data: TModel[] | undefined;
  columns: ColumnType<TModel>[];
  /** NB: we can provide extra things to render behind all model data */

  renderExtraColumns?: (item: TModel | undefined) => JSX.Element;
  extraColumnsAtStart?: boolean;
  /**
   * optionally provide a function that returns a boolean indicating whether or not this row should be highlighted
   */
  shouldHighlightItem?: (item: TModel) => boolean;
};

/**
 * gets all columns you can present based on a modelname, the interfaces of that model, and the data
 */
export const getColumns = (
  modelName: string,
  interfaces: TsInterface[] | undefined,
  data: any[]
): ColumnType<any>[] => {
  /**
   * needed in case something goes wrong with the index
   */
  const getDumbColumns = (): ColumnType<any>[] => {
    return data[0]
      ? Object.keys(data[0])
          .map((objectParameterKey) => {
            const value = data[0][objectParameterKey];
            if (
              !["string", "boolean", "number", "null"].includes(typeof value)
            ) {
              return null;
            }
            return {
              name: humanCase(objectParameterKey),
              objectParameterKey,
              presentationType: "text" as "text",
            };
          })
          .filter(notEmpty)
      : [];
  };
  if (!interfaces) return getDumbColumns();

  const properties = interfaces.find((x) => x.name === modelName)?.type
    .typeDefinition?.properties;

  if (!properties) return getDumbColumns();

  const columns: ColumnType<any>[] = Object.keys(properties)
    .map((objectParameterKey) => {
      const maybeProperty = properties[objectParameterKey];
      const property =
        typeof maybeProperty !== "boolean" ? maybeProperty : undefined;

      if (!property) return;

      if (
        makeArray(property.type).find((x) => ["object", "array"].includes(x))
      ) {
        // there are arrays or objects among the type of this property
        return;
      }

      const column: ColumnType<any> = {
        name: humanCase(objectParameterKey),
        objectParameterKey,
        presentationType: "text",
      };

      return column;
    })
    .filter(notEmpty);
  return columns;
};

/**
 * This contains the row which is any data of the respective model and it contains a array of columns
 */
export type RowType<TModel extends { [key: string]: any } = any> = {
  row: TModel | undefined;
  columns: ColumnType<TModel>[];
  renderExtraColumns?: (row: TModel | undefined) => JSX.Element;
  extraColumnsAtStart?: boolean;
  shouldHighlight?: boolean;
};

export type Keys<TObject> = Extract<keyof TObject, string>;

/**
 * This is a column, that contains the name, type of presentation and the object parameterkey that is used to generate a table
 *
 * NB: in the generics we say here that the model must be an object with keys
 */
export type ColumnType<TModel extends { [key: string]: any }> = {
  name: string;
  presentationType?: PresentationTypeEnum;
  customPresentation?: (item: TModel) => JSX.Element;
  /**
   * Used to match the right row item to the column
   *
   * NB: we are saying here that we only want all the string keys of the model we are using
   */
  objectParameterKey: Keys<TModel>;
};

/**
 * This contains all possible presenation types of the data in the table
 */
export type PresentationTypeEnum =
  | "text"
  | "referenceSingle"
  | "referenceMultiple";

export const Table = <TModel extends { [key: string]: any }>({
  data,
  columns,
  renderExtraColumns,
  extraColumnsAtStart,
  shouldHighlightItem,
}: TableType<TModel>) => {
  return (
    <Div className="px-4 sm:px-6 lg:px-8">
      <Div className="mt-8 flex flex-col">
        <Div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <Div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                {extraColumnsAtStart ? (
                  <TableHeadItem name="" objectParameterKey={""} />
                ) : null}
                {columns.map((column, index) => (
                  // NB: here we are destructuring column to provide all the props to a component
                  <TableHeadItem {...column} />
                ))}
                {renderExtraColumns && !extraColumnsAtStart ? (
                  <TableHeadItem objectParameterKey={""} name="" />
                ) : null}
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data
                  ? // If data is undefined, we have to render the skelletonview
                    data.map((item, index) => {
                      const shouldHighlight = shouldHighlightItem?.(item);
                      return (
                        <TableRow
                          shouldHighlight={shouldHighlight}
                          key={`row${index}`}
                          row={item}
                          columns={columns}
                          renderExtraColumns={renderExtraColumns}
                          extraColumnsAtStart={extraColumnsAtStart}
                        />
                      );
                    })
                  : // Without data we are assuming it's still loading and show 10 skelletons, which are simply TableRow's without any data
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => (
                      <TableRow
                        key={`skeleton${index}`}
                        row={undefined}
                        columns={columns}
                      />
                    ))}
              </tbody>
            </table>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export const TableHeadItem = (column: ColumnType<any>) => (
  <th
    scope="col"
    className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 sm:pl-6 md:pl-0"
  >
    <Div>{column.name}</Div>
  </th>
);

const Skeleton = () => (
  <td className={tdClassName}>
    <div className="bg-gray-200 w-full p-2 animate-pulse rounded-lg h-5" />
  </td>
);

const renderColumn = <TModel extends { [key: string]: any }>(
  column: ColumnType<TModel>,
  row: TModel,
  index: number
) => {
  if (column.presentationType === "text") {
    const value: string = String(row[column.objectParameterKey]);
    /**
     * This is a text item that presents just one string
     */
    return <td className={tdClassName}>{value}</td>;
  } else if (column.presentationType === "referenceSingle") {
    // Any parameter with pattern xxxSlug or xxxId should link to that instance in the referred model (link to `db?model={model}#{id}`)
    const referenceId: string = row[column.objectParameterKey];

    const referenceParameterInfo = getReferenceParameterInfo(
      column.objectParameterKey
    );

    return (
      <td className={tdClassName}>
        <a
          href={`db?model=${referenceParameterInfo.interfaceName}&${referenceParameterInfo.keyInModel}=${referenceId}`}
        >
          {referenceId}
        </a>
      </td>
    );
  } else if (column.presentationType === "referenceMultiple") {
    // Any parameter with pattern xxxSlugs or xxxIds should link to those instance in the referred model (link to `db?model={model}&xxx={id}`) for every instance
    const referenceIds: string[] = row[column.objectParameterKey];

    const referenceParameterInfo = getReferenceParameterInfo(
      column.objectParameterKey
    );

    return (
      <td className={tdClassName}>
        {referenceIds.map((referenceId) => {
          return (
            <a
              href={`db?model=${referenceParameterInfo.interfaceName}&${referenceParameterInfo.keyInModel}=${referenceId}`}
            >
              {referenceId}
            </a>
          );
        })}
      </td>
    );
  } else {
    return <td className={tdClassName}>Unknown Presentation Type</td>;
  }
};
export const TableRow = <T extends { [key: string]: any } = any>({
  row,
  columns,
  renderExtraColumns,
  extraColumnsAtStart,
  shouldHighlight,
}: RowType<T>) => {
  /**
   * Check which presentation type is set for this column and return this component
   */
  return (
    <tr className={shouldHighlight ? "bg-blue-300" : undefined}>
      {extraColumnsAtStart && (
        <td className={tdClassName}>{renderExtraColumns?.(row)}</td>
      )}
      {columns.map((column, index) => {
        if (!row) {
          return <Skeleton />;
        }

        // we can optionally have a custom presentation for any column
        if (column.customPresentation) {
          return column.customPresentation(row);
        }

        return renderColumn(column, row, index);
      })}

      {!extraColumnsAtStart && (
        <td className={tdClassName}>{renderExtraColumns?.(row)}</td>
      )}
    </tr>
  );
};
