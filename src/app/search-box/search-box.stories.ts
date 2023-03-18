
import { Story, moduleMetadata, Meta } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { SearchBoxComponent } from './search-box.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { getSourcePreviewParams } from 'src/shared/sourcepreview-addon';


export default {
  title: 'Search-Box/SearchBox',
  component: SearchBoxComponent,
  decorators: [
    moduleMetadata({
        imports: [TypeaheadModule.forRoot(),BrowserAnimationsModule]
    })
  ]
} as Meta
const Template: Story<SearchBoxComponent> = (args: SearchBoxComponent) => ({
  component: SearchBoxComponent,
  props: args,
});

const sourcePreviewParams = () => getSourcePreviewParams([
  '/search-box/search-box.component.ts',
  '/search-box/search-box.component.scss',
  '/search-box/search-box.component.html'
]);

export const Typehead = Template.bind({});
Typehead.args = {
  states: [
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
  search_type: "typeahead"
};
Typehead.parameters = sourcePreviewParams();

export const Input_search = Template.bind({});
Input_search.args = {
  states: [
    {name:'Alabama',id:2},
    {name:'California',id:2},
    {name:'New York',id:2},
    {name:'Ohio',id:2},
     ],
  search_type: "inputsearch"
};
Input_search.parameters = sourcePreviewParams();
