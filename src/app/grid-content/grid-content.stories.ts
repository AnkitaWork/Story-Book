import { Story, Meta, moduleMetadata } from '@storybook/angular'
import { GridContentComponent } from './grid-content.component'
import { BrowserModule } from '@angular/platform-browser'
import { AgGridModule } from 'ag-grid-angular'
import { getSourcePreviewParams } from 'src/shared/sourcepreview-addon'

export default {
    title: "Grid/Grid Content",
    component: GridContentComponent,
    decorators: [
        moduleMetadata({
            imports: [BrowserModule, AgGridModule.withComponents([])]
        })
    ]
} as Meta

const template: Story<GridContentComponent> = (args: GridContentComponent) => ({
    component: GridContentComponent,
    props: args
})

const sourcePreviewParams = () => getSourcePreviewParams([
  '/grid-content/grid-content.component.ts',
  '/grid-content/grid-content.component.scss',
  '/grid-content/grid-content.component.html'
]);

export const GridContent = template.bind({})
GridContent.args = {
    height: 500,
    width: 500,
    rowData: [
		{ make: 'Toyota', model: 'Celica', price: 35000 },
		{ make: 'Ford', model: 'Mondeo', price: 32000 },
		{ make: 'Porsche', model: 'Boxter', price: 72000 }
    ],
    columnDefs : [
		{headerName: 'Make', field: 'make', sortable: true, filter: true },
		{headerName: 'Model', field: 'model', sortable: true, filter: true },
		{headerName: 'Price', field: 'price', sortable: true, filter: true }
	]
}
GridContent.parameters = sourcePreviewParams();
