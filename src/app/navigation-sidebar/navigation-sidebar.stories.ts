import { Story, Meta, moduleMetadata } from '@storybook/angular'
import { NavigationSidebarComponent } from './navigation-sidebar.component'
import { SidebarModule } from 'ng-sidebar'
import { BrowserModule } from '@angular/platform-browser'
import { getSourcePreviewParams } from 'src/shared/sourcepreview-addon'

export default {
    title: 'NavigationSidebar/Navigation Sidebar',
    component: NavigationSidebarComponent,
    decorators: [
        moduleMetadata({
            imports: [BrowserModule, SidebarModule.forRoot()]
        })
    ]
} as Meta

const template: Story<NavigationSidebarComponent> = (args: NavigationSidebarComponent) => ({
    component: NavigationSidebarComponent,
    props: args
})

const sourcePreviewParams = () => getSourcePreviewParams([
  '/navigation-sidebar/navigation-sidebar.component.ts',
  '/navigation-sidebar/navigation-sidebar.component.scss',
  '/navigation-sidebar/navigation-sidebar.component.html'
]);

export const SidebarOver = template.bind({})
SidebarOver.args = {
    opened: false,
    closeOnClickOutside: true,
    mode: 'over',
    position: 'left',
    content: 'Sidebar content'
}
SidebarOver.parameters = sourcePreviewParams();

export const SidebarPush = template.bind({})
SidebarPush.args = {
    opened: false,
    closeOnClickOutside: true,
    mode: 'push',
    position: 'left',
    content: 'Sidebar content'
}
SidebarPush.parameters = sourcePreviewParams();


