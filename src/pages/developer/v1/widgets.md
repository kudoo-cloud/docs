# Creating a widget

All the widgets are stored under `src/widgets`.

Since we are using `React` in our application we can first add that

```typescript
import * as React from 'react';
import { connect } from 'react-redux';
import styles, { MostRecentBlockStyles } from './styles';
import {
  withStyles,
  composeStyles,
  ErrorBoundary,
  Loading,
} from '@kudoo/components';
```

It will be much easier to show you how to build a widget with a real world example.

So let's build a `widget` which will show Sales by Services

# Adding a widget to the Dashboard