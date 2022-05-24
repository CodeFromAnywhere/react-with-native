import { PluginInputType } from "react-with-native-form";

export class DatetimeInputType implements PluginInputType {
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
  extra?: {
    type?: any;
    isDatePickerVisible?: boolean;
    handleConfirm?: any;
    hideDatePicker?: any;
  };

  isDatePickerVisible?: boolean;
}
