
import { Story, moduleMetadata, Meta } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { DatePickerComponent } from './date-picker.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleChange } from '@angular/core';
import { range } from 'rxjs';
import { getSourcePreviewParams } from 'src/shared/sourcepreview-addon';


export default {
  title: 'DatePicker/Datepicker',
  component: DatePickerComponent,
  decorators: [
    moduleMetadata({
        imports: [BsDatepickerModule.forRoot(),BrowserAnimationsModule]
    })
  ]
} as Meta
const Template: Story<DatePickerComponent> = (args: DatePickerComponent) => ({
  component: DatePickerComponent,
  props: args,
});

const sourcePreviewParams = () => getSourcePreviewParams([
  '/date-picker/date-picker.component.ts',
  '/date-picker/date-picker.component.scss',
  '/date-picker/date-picker.component.html'
]);

export const Datepicker = Template.bind({});
Datepicker.args = {
  minDate: new Date(),
  maxDate:new Date(),
  isDisabled:false,
  showWeekNumbers:false,
  dateInputFormat:"DD-MM-YYYY",
  colorTheme: 'theme-green',
  pickertype: 'simple'
};
Datepicker.parameters = sourcePreviewParams();

export const Daterangepicker = Template.bind({});
Daterangepicker.args = {
  minDate: new Date(),
  maxDate:new Date(),
  isDisabled:false,
  showWeekNumbers:false,
  dateInputFormat:"DD-MM-YYYY",
  colorTheme: 'theme-green',
  pickertype: 'range'
};
Daterangepicker.parameters = sourcePreviewParams();



