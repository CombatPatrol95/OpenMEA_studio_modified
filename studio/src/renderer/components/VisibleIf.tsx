import * as React from 'react'

export interface HidableProps {
    condition: boolean | null
    children?: React.ReactNode;
} 

export class VisibleIf extends React.Component<HidableProps, {}> {
    render = () => {
        if (!this.props.condition) {
            return null
        }
    
        return this.props.children
    }
}