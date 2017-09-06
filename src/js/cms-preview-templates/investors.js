import React from "react";
import format from "date-fns/format";

export default class PostPreview extends React.Component {
  render() {
      const {entry, getAsset, widgetFor} = this.props;

      return <div>
        <div className="">
            <div>{ widgetFor("aboutText") }</div>
        </div>
    </div>;
  }
}
