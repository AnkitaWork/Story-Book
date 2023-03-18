import { Story, Meta, moduleMetadata } from '@storybook/angular'
import { CurrencyComponent } from './currency.component'
import { NgxCurrencyModule } from 'ngx-currency'
import { getSourcePreviewParams } from 'src/shared/sourcepreview-addon'

export default {
    title: "Currency/Currency",
    component: CurrencyComponent,
    decorators: [
        moduleMetadata({
            imports: [NgxCurrencyModule]
        })
    ]
} as Meta

const template: Story<CurrencyComponent> = (args: CurrencyComponent) => ({
    component: CurrencyComponent,
    props: args
})

const sourcePreviewParams = () => getSourcePreviewParams([
  '/currency-label/currency.component.ts',
  '/currency-label/currency.component.scss',
  '/currency-label/currency.component.html'
]);

export const currencyText = template.bind({})
currencyText.args = {
    value: 100,
    currency: 'INR',
    input: false
}
currencyText.parameters = sourcePreviewParams();

export const currencyInput = template.bind({})
currencyInput.args = {
    currency: '₹',
    input: true,
    align: 'left',
    precision: 0,
    minimum: 0,
    maximum: 10000
}
currencyInput.parameters = sourcePreviewParams();

