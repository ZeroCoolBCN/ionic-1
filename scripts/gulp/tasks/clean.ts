import * as del from 'del';
import { task } from 'gulp';

task('clean', (done: Function) => {
  del(['dist/**']).then(() => {
    done();
  }).catch(err => {
    done(err);
  });
});

task('clean.src', (done: Function) => {
  del(['src/**/*.js', 'src/**/*.d.ts', '!src/components/slides/swiper-widget.*']).then(() => {
    done();
  }).catch(err => {
    done(err);
  });
});
