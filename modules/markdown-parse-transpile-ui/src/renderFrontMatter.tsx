import { Frontmatter } from "matter-types";
import { Div, P } from "react-with-native";

/**
 * Renders markdown frontmatter parameters (and optionally a spacer)
 */
export const renderFrontmatter = (
  parameters: Frontmatter,
  config?: { renderSpacer?: boolean }
) => {
  const frontMatterKeys = Object.keys(parameters);

  return frontMatterKeys.length > 0 ? (
    <Div>
      <Div>
        {frontMatterKeys.map((key) => (
          <P>
            {key}: {parameters[key]}
          </P>
        ))}
      </Div>

      {config?.renderSpacer ? <P>------------</P> : null}
    </Div>
  ) : null;
};
