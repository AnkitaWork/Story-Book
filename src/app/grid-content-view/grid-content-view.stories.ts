import { Story, Meta, moduleMetadata } from '@storybook/angular'
import { getSourcePreviewParams } from 'src/shared/sourcepreview-addon';
import { GridContentViewComponent } from './grid-content-view.component'

export default {
    title: 'Grid/Grid Content View',
    component: GridContentViewComponent,
    decorators: [
        moduleMetadata({
        })
    ]
} as Meta

const sourcePreviewParams = () => getSourcePreviewParams([
  '/grid-content-view/grid-content-view.component.ts',
  '/grid-content-view/grid-content-view.component.scss',
  '/grid-content-view/grid-content-view.component.html'
]);

const template: Story<GridContentViewComponent> = (args: GridContentViewComponent) => ({
    component: GridContentViewComponent,
    props: args
})

export const GridContentView = template.bind({})
GridContentView.args = {
    height: 200,
    imageView: false,
    noOfRows: 3,
    titles: [
        "One",
        "Two",
        "Three"
    ]
}
GridContentView.parameters = sourcePreviewParams();

export const GridImageView = template.bind({})
GridImageView.args = {
    imageView: true,
    noOfRows: 3,
    images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKhIHcJvjvEhl3gpaHKfdINhgCBQOo1ckZEA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKhIHcJvjvEhl3gpaHKfdINhgCBQOo1ckZEA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKhIHcJvjvEhl3gpaHKfdINhgCBQOo1ckZEA&usqp=CAU"
    ]
}
GridImageView.parameters = sourcePreviewParams();
