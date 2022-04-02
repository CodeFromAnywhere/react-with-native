import { PluginInputType } from "../../react-with-native-form/src";

export class DateInputType implements PluginInputType {
  /**
   * value type
   */
  value!: Date | null;

  /**
   * input generic configuration
   */
  config?: {};
  /**
   * field specific configuration
   */
  extra?: {};
}
