declare module 'react-tagsinput' {
    import * as React from 'react';

    interface TagsInputProps {
        value: string[];
        onChange: (tags: string[]) => void;
        inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
        onlyUnique?: boolean;
    }

    const TagsInput: React.FC<TagsInputProps>;

    export default TagsInput;
}
