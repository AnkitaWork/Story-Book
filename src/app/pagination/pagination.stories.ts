
import { Story, moduleMetadata, Meta } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { PaginationComponent } from './pagination.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { getSourcePreviewParams } from 'src/shared/sourcepreview-addon';

export default {
  title: 'Pagination/Pagination',
  component: PaginationComponent,
  decorators: [
    moduleMetadata({
        imports: [PaginationModule.forRoot()]
    })
  ]
} as Meta
const Template: Story<PaginationComponent> = (args: PaginationComponent) => ({
  component: PaginationComponent,
  props: args,
});

const sourcePreviewParams = () => getSourcePreviewParams([
  '/pagination/pagination.component.ts',
  '/pagination/pagination.component.scss',
  '/pagination/pagination.component.html'
]);

export const Pagination = Template.bind({});
Pagination.args = {
    totalItems: 64,
    itemsPerPage:10
};
Pagination.parameters = sourcePreviewParams();
