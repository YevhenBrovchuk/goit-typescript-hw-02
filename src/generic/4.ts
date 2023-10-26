/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface PropsPage {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<PropsPage> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
