type SampleIteraotrResult = {
    value: string;
    done: boolean;
  }
  
type SampleIterableIterator = {
  next: () => SampleIteraotrResult;
}

type SampleIterable = {
  [Symbol.iterator]: () => SampleIterableIterator
}

const SampleIterable: SampleIterable = {
  [Symbol.iterator]: () => {
    return {
      next : () => {
        return { value: 'hogehoge', done: false }
      }
    }
  }
};
