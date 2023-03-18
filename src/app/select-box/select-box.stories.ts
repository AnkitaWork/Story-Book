
import { Story, Meta } from '@storybook/angular';
import { SelectBoxComponent } from './select-box.component';
import { action } from '@storybook/addon-actions';
import { getSourcePreviewParams } from 'src/shared/sourcepreview-addon';


export default {
  title: 'SelectBox/Select Box',
  component: SelectBoxComponent,
  decorators: [
  ]
} as Meta
const Template: Story<SelectBoxComponent> = (args: SelectBoxComponent) => ({
  component: SelectBoxComponent,
  props: args,
});

const sourcePreviewParams = () => getSourcePreviewParams([
  '/select-box/select-box.component.ts',
  '/select-box/select-box.component.scss',
  '/select-box/select-box.component.html'
]);

export const SelectBox = Template.bind({});
SelectBox.args = {
  placeholder: "Select",
  disabled: false,
  options: [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Dakota',
    'North Carolina',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ],
  onChange: action('select option')
};
SelectBox.parameters = sourcePreviewParams();
