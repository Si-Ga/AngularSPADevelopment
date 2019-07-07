import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import * as marked from "marked";

@Component({
  selector: "app-markdown-editor",
  templateUrl: "./markdown-editor.component.html",
  styleUrls: ["./markdown-editor.component.scss"]
})
export class MarkdownEditorComponent implements OnInit {
  @Input() placeHolder: string;
  @Output() onMarkdownSaved: EventEmitter<string> = new EventEmitter<string>();

  private markdown: string;

  constructor() {}

  ngOnInit() {
    this.markdown = this.compileMD(this.placeHolder);
  }

  saveMarkdown() {
    this.onMarkdownSaved.emit(this.markdown);
  }

  onValueChange(e) {
    this.markdown = this.compileMD(e.target.value);
  }

  compileMD(val: string): string {
    return marked.parser(marked.lexer(val));
  }
}
