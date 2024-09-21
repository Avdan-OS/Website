//
// There's some really weird interaction with @types/react and older libraries
// using ForwardRef or something, idk.
//
// This peace of type gaslightery is necessary in order for tsc to actually
// compile our <Button> elements from @geist-ui.
//
// See more here:
// https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/69006#discussioncomment-8874434
//

import "react";

declare module "react" {
    interface HTMLAttributes<T> {
        onPointerEnterCapture?: (e: React.PointerEvent<T>) => void;
        onPointerLeaveCapture?: (e: React.PointerEvent<T>) => void;
        placeholder?: string;
        crossOrigin?: string;
    }
    interface RefAttributes<T> {
        onPointerEnterCapture?: (e: React.PointerEvent<T>) => void;
        onPointerLeaveCapture?: (e: React.PointerEvent<T>) => void;
        placeholder?: string;
        crossOrigin?: string;
    }
}
