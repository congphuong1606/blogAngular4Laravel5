import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    selector: 'app-edit-post',
    styleUrls: ['./edit-post.component.css'],
    templateUrl: './edit-post.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EditPostComponent),
            multi: true
        }
    ]
})
export class EditPostComponent implements OnInit, ControlValueAccessor {
    ngOnInit(): void {
    }

    setDisabledState(isDisabled: boolean): void {
    }

    constructor() {

    }


    // Begin ControlValueAccesor methods.
    onChange = (_) => {
    };
    onTouched = () => {
    };

    // Form model content changed.
    writeValue(content: any): void {
        this.model = content;
    }

    registerOnChange(fn: (_: any) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    // End ControlValueAccesor methods.

    model: any;

    config: Object = {
        charCounterCount: false
    };
}