import { PluginInputType } from "react-with-native-form";
export class TimeInputType implements PluginInputType {
  /**
   * value type
   */
  value!: Date | null;

  /**
   * time
   */
  time?: Boolean | null;

  /**
   * input generic configuration
   */
  config?: {};
  /**
   * field specific configuration
   */
  extra?: {};
}
